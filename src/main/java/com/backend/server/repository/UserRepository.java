package com.backend.server.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.backend.server.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    
    @Query("SELECT u FROM User u WHERE u.login = :login AND u.password = :password")
    User findByUsernameAndPassword(@Param("login") String login, @Param("password") String password);

    Optional<User> findByUsername(String username);
}
