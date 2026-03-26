package com.ledebour.crud_spring.enums;

public enum Category {
    BACK_END("Back-end"), FRONT_END("Front-end");

    private String value;

    private Category(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    //toString() para retornar o valor da string ao invés do nome do enum
    @Override
    public String toString() {
        return value;
    }
    
}
