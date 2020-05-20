package com.ecommerce.product.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.bind.annotation.CrossOrigin;

@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
@CrossOrigin
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication().withUser("mosses").
                password("{noop}mosses").roles("USER").and().
                withUser("admin").password("{noop}admin").
                roles("ADMIN");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.httpBasic().and().authorizeRequests().
                antMatchers(HttpMethod.POST,"/products").
                hasRole("ADMIN").antMatchers(HttpMethod.PUT,"/products/**").hasRole("ADMIN").
                antMatchers(HttpMethod.PATCH, "/products/**").hasRole("ADMIN").
                antMatchers(HttpMethod.DELETE,"/products/**").hasRole("ADMIN").and().csrf().disable();
    }
}
