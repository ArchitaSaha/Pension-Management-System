package com.pension.microservices.pensionmanagementsystem.service;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.pension.microservices.pensionmanagementsystem.entity.User;
import com.pension.microservices.pensionmanagementsystem.repository.UserRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService
{
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException
    {
		// TODO Auto-generated method stub
		User user = userRepository.findByUsername(username).orElseThrow(() ->
        new UsernameNotFoundException("User not found with username:" + username));
        
		Set<GrantedAuthority> authorities = new HashSet<>();
        
        authorities.add(new SimpleGrantedAuthority(user.getRole().name()));
		
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), authorities);
	}
}