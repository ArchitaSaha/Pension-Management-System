package com.pension.microservices.pensionmanagementsystem.dto;

import lombok.Data;

@Data
public class LoginDto
{
    private String username;
    private String password;
}