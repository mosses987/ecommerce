package com.ecommerce.product.repositories;

import com.ecommerce.product.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin
public interface RoleRepository extends JpaRepository<Role, Integer> {

    Role findByUsername(@Param("username") String username);
}
