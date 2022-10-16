package com.pension.microservices.pensionmanagementsystem.proxy;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

// import com.pension.microservices.pensionmanagementsystem.dto.SignupDto;
// import com.pension.microservices.pensionmanagementsystem.entity.User;
import com.pension.microservices.pensionmanagementsystem.entity.Pensioner;

@FeignClient(name = "pensioner-detail", url = "localhost:8000")
public interface PensionDetailsProxy
{
    @PostMapping("/pension/save-pensioner-details")
    public ResponseEntity<Pensioner> createPensioner(@RequestBody Pensioner pensioner);
    // public ResponseEntity<User> createPensioner(@RequestBody SignupDto pensioner);
}