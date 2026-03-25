package com.ledebour.crud_spring.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ledebour.crud_spring.model.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
	List<Course> findByStatus(String status);

    // versão padrão (equivalente ao @Where)
    default List<Course> findAllAtivos() {
        return findByStatus("Ativo");
    }
}
