package com.pension.microservices.pensionmanagementsystem.proxy;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.pension.microservices.pensionmanagementsystem.dto.GetRequestDto;

@FeignClient(name = "process-pension", url = "localhost:8001")
public interface ProcessPensionProxy
{
    @GetMapping(value = "/pension/show-pension-details/{id}")
    public GetRequestDto processPension(@PathVariable(name = "id") String id);
}