package com.pension.microservices.pensionmanagementsystem.dto;

import java.sql.Date;

import lombok.Data;

@Data
public class SignupDto
{
    private String username;
    private String password;
    private String name;
    private String aadhaarNumber;
    private Date dob;
    private String pan;
    private Long salaryEarned;
    private Long allowances;
    private String pensionType;
    private String bankType;
}