package com.movie.movierecommender.data;

import javax.sql.DataSource;
import com.movie.movierecommender.model.Movie;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.core.launch.support.RunIdIncrementer;
import org.springframework.batch.item.database.BeanPropertyItemSqlParameterSourceProvider;
import org.springframework.batch.item.database.JdbcBatchItemWriter;
import org.springframework.batch.item.database.builder.JdbcBatchItemWriterBuilder;
import org.springframework.batch.item.file.FlatFileItemReader;
import org.springframework.batch.item.file.builder.FlatFileItemReaderBuilder;
import org.springframework.batch.item.file.mapping.BeanWrapperFieldSetMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;

@Configuration
@EnableBatchProcessing
public class BatchConfig {

    private final String[] FIELD_NAMES = new String[] {
            "movie_id", "title", "year", "country", "genre", "director", "minutes", "poster", "rating"
    };

    @Autowired
    public JobBuilderFactory jobBuilderFactory;

    @Autowired
    public StepBuilderFactory stepBuilderFactory;

    @Bean
    public FlatFileItemReader<MovieInput> reader() {
        return new FlatFileItemReaderBuilder<MovieInput>()
                .name("MovieItemReader")
                .resource(new ClassPathResource("moviedata.csv"))
                .delimited()
                .names(FIELD_NAMES)
                .fieldSetMapper(new BeanWrapperFieldSetMapper<MovieInput>() {
                    {
                        setTargetType(MovieInput.class);
                    }
                })
                .build();
    }

    // processing
    @Bean
    public MovieDataProcessor processor() {
        return new MovieDataProcessor();
    }

    // writing
    @Bean
    public JdbcBatchItemWriter<Movie> writer(DataSource dataSource) {
        return new JdbcBatchItemWriterBuilder<Movie>()
                .itemSqlParameterSourceProvider(new BeanPropertyItemSqlParameterSourceProvider<>())
                .sql("INSERT INTO movie (movie_id,title,year,country, genre,director,minutes,poster, rating)"
                        + " VALUES (:movieId,:title,:year,:country,:genre,:director,:minutes,:poster, :rating)")
                .dataSource(dataSource)
                .build();
    }

    // config
    @Bean
    public Job importUserJob(JobCompletionNotificationListener listener, Step step1) {
        return jobBuilderFactory
                .get("importUserJob")
                .incrementer(new RunIdIncrementer())
                .listener(listener)
                .flow(step1)
                .end()
                .build();
    }

    @Bean
    public Step step1(JdbcBatchItemWriter<Movie> writer) {
        return stepBuilderFactory
                .get("step1")
                .<MovieInput, Movie>chunk(10)
                .reader(reader())
                .processor(processor())
                .writer(writer)
                .build();
    }

}
