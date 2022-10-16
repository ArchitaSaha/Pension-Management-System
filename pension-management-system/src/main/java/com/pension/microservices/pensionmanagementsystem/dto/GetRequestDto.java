package com.pension.microservices.pensionmanagementsystem.dto;

import java.util.Date;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GetRequestDto {
    private String aadhaarNumber;
    private String name;
    private Date dob;
    private String pan;
    private long salaryEarned;
    private long allowances;
    private String pensionType;
    private String bankType;
    private double pensionAmount;
    private double serviceCharge;
}