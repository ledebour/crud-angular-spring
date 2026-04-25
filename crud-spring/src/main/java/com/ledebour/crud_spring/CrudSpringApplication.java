package com.ledebour.crud_spring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.ledebour.crud_spring.enums.Category;
import com.ledebour.crud_spring.model.Course;
import com.ledebour.crud_spring.model.Lesson;
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

			for (int i = 1; i <= 20; i++) {

				Course course = new Course();
				course.setName("Angular com Spring" + i);
				course.setCategory(Category.FRONT_END);
				Lesson lesson = new Lesson();
				lesson.setName("Introdução");
				lesson.setYoutubeUrl("01234567890");
				lesson.setCourse(course);
				course.getLessons().add(lesson);

				Lesson l1 = new Lesson();
				l1.setName("Angular");
				l1.setYoutubeUrl("01234567891");
				l1.setCourse(course);
				course.getLessons().add(l1);

				courseRepository.save(course);
			}

		};
	}
}
