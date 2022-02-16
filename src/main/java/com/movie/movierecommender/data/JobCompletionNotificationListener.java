package com.movie.movierecommender.data;

import java.util.HashMap;
import java.util.Map;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import com.movie.movierecommender.model.Genre;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.listener.JobExecutionListenerSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class JobCompletionNotificationListener extends JobExecutionListenerSupport {

    private static final Logger log = LoggerFactory.getLogger(JobCompletionNotificationListener.class);
    private final EntityManager em;

    @Autowired
    public JobCompletionNotificationListener(EntityManager em) {
        this.em = em;
    }

    @Override
    @Transactional
    public void afterJob(JobExecution jobExecution) {
        if (jobExecution.getStatus() == BatchStatus.COMPLETED) {
            log.info("!!! JOB FINISHED! Time to verify the results");

            Map<String, Genre> genreData = new HashMap<>();
            em.createQuery("select distinct m.genre, count(*) from Movie m group by m.genre", Object[].class)
                    .getResultList()
                    .stream()
                    .map(e -> new Genre((String) e[0], (long) e[1]))
                    .forEach(
                            genre -> genreData.put(genre.getGenreName(), genre));
            genreData.values().forEach(genre -> em.persist(genre));
            genreData.values().forEach(genre -> System.out.println(genre));

        }
    }
}