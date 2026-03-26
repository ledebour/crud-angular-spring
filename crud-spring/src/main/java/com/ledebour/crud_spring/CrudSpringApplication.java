package com.ledebour.crud_spring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.ledebour.crud_spring.enums.Category;
import com.ledebour.crud_spring.model.Course;
import com.ledebour.crud_spring.repository.CourseRepository;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(CourseRepository courseRepository) {
		return args -> {
			System.out.println("Database initialized");
			courseRepository.deleteAll();
			Course course = new Course();
			course.setName("Angular com Spring");
			course.setCategory(Category.FRONT_END);
			courseRepository.save(course);
		};
	}
}
