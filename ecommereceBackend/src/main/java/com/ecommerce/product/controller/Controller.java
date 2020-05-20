package com.ecommerce.product.controller;


import com.ecommerce.product.entity.Role;
import com.ecommerce.product.repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RepositoryRestController
@RequestMapping("/roles")
@ResponseBody
@CrossOrigin
public class Controller {


    @Autowired
    private RoleRepository roleRepository;

    @GetMapping("/start/{username}")
    public Role getPassword(@PathVariable(name = "username") String username){

        System.out.println(username);
        Role byUsername = roleRepository.findByUsername(username);
        System.out.println(byUsername);

        return byUsername;


    }
}
