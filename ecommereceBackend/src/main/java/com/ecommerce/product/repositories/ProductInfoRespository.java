package com.ecommerce.product.repositories;

import com.ecommerce.product.entity.ProductInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public interface ProductInfoRespository extends JpaRepository<ProductInfo,Integer> {
}
