package com.backend.server.service;


import java.util.List;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.backend.server.configuration.JwtUtil;
import com.backend.server.model.Role;
import com.backend.server.model.User;
import com.backend.server.repository.UserRepository;
import com.backend.server.requests.AuthenticationRequest;
import com.backend.server.requests.AuthenticationResponse;
import com.backend.server.requests.RegisterRequest;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;
    private final AuthenticationManager authenticationManager;
    
    public AuthenticationResponse register(RegisterRequest request) {
        var user = User.builder()
        .username(request.getUsername())
        .email(request.getEmail())
        .password(passwordEncoder.encode(request.getPassword()))
        .role(Role.USER)
        .build();

        userRepository.save(user);
        var JwtToken = jwtUtil.generateToken(user);
        return AuthenticationResponse.builder()
        .token(JwtToken)
        .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        var user = userRepository.findByUsername(request.getUsername()).orElseThrow();
        var JwtToken = jwtUtil.generateToken(user);
        return AuthenticationResponse.builder()
        .token(JwtToken)
        .build();
    }

    public List<String> getCurrentUser(String token) {
        var user = userRepository.findByUsername(jwtUtil.extractUsername(token)).orElseThrow();
        return List.of(user.getUsername(), user.getEmail());
    }
}

