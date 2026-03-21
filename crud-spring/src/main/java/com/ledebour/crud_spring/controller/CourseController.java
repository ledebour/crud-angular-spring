package com.ledebour.crud_spring.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ledebour.crud_spring.model.Course;
import com.ledebour.crud_spring.repository.CourseRepository;

import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CourseController {

    private final CourseRepository courseRepository;
    
    @GetMapping
    public List<Course> list() {
        return courseRepository.findAll();
    }   
}
