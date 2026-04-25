package com.ledebour.crud_spring.dto;

import java.util.List;

public record CoursePageDTO(List<CourseDTO> courses, int pageNumber, int pageSize, long totalElements, int totalPages) {

}
