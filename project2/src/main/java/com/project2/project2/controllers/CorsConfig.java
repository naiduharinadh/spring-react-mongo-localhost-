package com.project2.project2.controllers;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://a215df3f2d1ab47ba9905ccfaf214f56-156782520.ap-southeast-1.elb.amazonaws.com:80") // Add your frontend URL here
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Add allowed HTTP methods
                .allowCredentials(true); // Allow cookies
    }
}

