package com.pension.microservices.pensionmanagementsystem.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pension.microservices.pensionmanagementsystem.entity.Pensioner;

public interface PensionerRepository extends JpaRepository<Pensioner, Long>
{
    Optional<Pensioner> findByUsername(String username);
    Optional<Pensioner> findByAadhaarNumber(String aadhaarNumber);
	Boolean existsByUsername(String username);
}