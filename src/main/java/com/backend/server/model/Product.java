package com.backend.server.model;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "products")
public class Product {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Long productId;

    @Column(name = "product_name")
    private String productName;

    @Column(name = "product_description", columnDefinition = "TEXT")
    private String productDescription;

    @Column(name = "product_image")
    private byte[] productImage;

    @ManyToOne
    @JoinColumn(name = "shop_id", nullable = false)
    private Shop shop;

    @Column(name = "price")
    private BigDecimal price;

    @Column(name = "quantity")
    private Integer quantity;

    @ManyToMany
    @JoinTable(
      name = "product_category", 
      joinColumns = @JoinColumn(name = "product_id"), 
      inverseJoinColumns = @JoinColumn(name = "category_id"))
    private Set<Category> categories = new HashSet<>();

    private Product(ProductBuilder builder) {
        this.productName = builder.productName;
        this.productDescription = builder.productDescription;
        this.productImage = builder.productImage;
        this.shop = builder.shop;
        this.price = builder.price;
        this.quantity = builder.quantity;
        this.categories = builder.categories;
    }

    public static ProductBuilder builder() {
        return new ProductBuilder();
    }
    
    public static class ProductBuilder {
        private String productName;
        private String productDescription;
        private byte[] productImage;
        private Shop shop;
        private BigDecimal price;
        private Integer quantity;
        private Set<Category> categories;


        public ProductBuilder setProductName(String productName) {
            this.productName = productName;
            return this;
        }

        public ProductBuilder setProductDescription(String productDescription) {
            this.productDescription = productDescription;
            return this;
        }

        public ProductBuilder setProductImage(byte[] productImage) {
            this.productImage = productImage;
            return this;
        }

        public ProductBuilder setShop(Shop shop) {
            this.shop = shop;
            return this;
        }

        public ProductBuilder setPrice(BigDecimal price) {
            this.price = price;
            return this;
        }

        public ProductBuilder setQuantity(Integer quantity) {
            this.quantity = quantity;
            return this;
        }

        public ProductBuilder setCategories(Set<Category> categories) {
            this.categories = categories;
            return this;
        }

        public Product build() {
            return new Product(this);
        }
    }
    }
    

