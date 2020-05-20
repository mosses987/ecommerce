package com.ecommerce.product.entity;

import javax.persistence.*;

@Entity
@Table(name = "PRODUCTINFO")
public class ProductInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String width;
    private String height;
    private String weight;
    private Integer price;
    private Integer quantity;
    private Integer shippingFee;
    @OneToOne(mappedBy = "productInfo")
    private Product product;

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    @Override
    public String toString() {
        return "ProductInfo{" +
                "id=" + id +
                ", width='" + width + '\'' +
                ", height='" + height + '\'' +
                ", weight='" + weight + '\'' +
                ", price=" + price +
                ", quantity=" + quantity +
                ", shippingFee=" + shippingFee +
                ", product=" + product +
                '}';
    }

    public Integer getResourceId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getWidth() {
        return width;
    }

    public void setWidth(String width) {
        this.width = width;
    }

    public String getHeight() {
        return height;
    }

    public void setHeight(String height) {
        this.height = height;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Integer getShippingFee() {
        return shippingFee;
    }

    public void setShippingFee(Integer shippingFee) {
        this.shippingFee = shippingFee;
    }
}
