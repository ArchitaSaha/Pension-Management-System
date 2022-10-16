package com.pension.microservices.pensionmanagementsystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pension.microservices.pensionmanagementsystem.dto.GetRequestDto;
import com.pension.microservices.pensionmanagementsystem.dto.LoginDto;
import com.pension.microservices.pensionmanagementsystem.dto.SignupDto;
import com.pension.microservices.pensionmanagementsystem.entity.Pensioner;
import com.pension.microservices.pensionmanagementsystem.entity.Role;
import com.pension.microservices.pensionmanagementsystem.entity.User;
import com.pension.microservices.pensionmanagementsystem.proxy.PensionDetailsProxy;
import com.pension.microservices.pensionmanagementsystem.proxy.ProcessPensionProxy;
import com.pension.microservices.pensionmanagementsystem.repository.PensionerRepository;
import com.pension.microservices.pensionmanagementsystem.repository.UserRepository;

@RestController
// @CrossOrigin(origins = "http://localhost:4200")
@CrossOrigin("*")
@RequestMapping("/pension")
public class AuthController
{
    @Autowired
    private AuthenticationManager authenticationManager;
	
    @Autowired
    private PensionerRepository pensionerRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PensionDetailsProxy pdProxy;

    @Autowired
    private ProcessPensionProxy ppProxy;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping("/complete-details/{id}")
    public GetRequestDto showCompleteDetails(@PathVariable(name = "id") String id)
    {
        GetRequestDto requestDto = this.ppProxy.processPension(id);
        // System.out.println("GET MAPPING");
        return requestDto;
        // return new GetRequestDto();
    }

    @PostMapping("/signin")
    public ResponseEntity<String> authenticateUser(@RequestBody LoginDto loginDto)
    {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginDto.getUsername(), loginDto.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        
        return new ResponseEntity<>("User login Successfully.", HttpStatus.OK);
    }

    // @PostMapping(value = "/signup2", consumes = "application/json", produces = "application/json")
	// public ResponseEntity<?> createUser(@RequestBody Pensioner pensioner)
    // {
    //     // add check for username exists in a DB
    //     if(pensionerRepository.existsByUsername(pensioner.getUsername()))
    //     {
    //         return new ResponseEntity<>("Username is already taken!", HttpStatus.BAD_REQUEST);
    //     }

    //     // Create new user 2
    //     this.pensionerRepository.save(pensioner);
    //     return new ResponseEntity<>("User registered successfully", HttpStatus.OK);
	// }

    @PostMapping("/signup")
	public ResponseEntity<?> registerUser(@RequestBody SignupDto signUpDto)
    {
        // add check for username exists in a DB
        if(userRepository.existsByUsername(signUpDto.getUsername()))
        {
            return new ResponseEntity<>("Username is already taken!", HttpStatus.BAD_REQUEST);
        }
        // create user object
        User user = new User();
        user.setAadhaarNumber(signUpDto.getAadhaarNumber());
        user.setName(signUpDto.getName());
        user.setUsername(signUpDto.getUsername());
        user.setPassword(passwordEncoder.encode(signUpDto.getPassword()));
        user.setRole(Role.USER);
        userRepository.save(user);
        return new ResponseEntity<>("User registered successfully", HttpStatus.OK);
	}
}