package com.backend.server.model;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "categories")
public class Category {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "category_id")
    private Long categoryId;

    @Column(name = "category_name")
    private String categoryName;

    @ManyToMany(mappedBy = "categories")
    private Set<Product> products = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "shop_id", nullable = false)
    private Shop shop;

    public static CategoryBuilder builder() {
        return new CategoryBuilder();
    }

    private Category(CategoryBuilder builder) {
        this.categoryId = builder.categoryId;
        this.categoryName = builder.categoryName;
        this.products = builder.products;
        this.shop = builder.shop;
    }

    public static class CategoryBuilder {
        private Long categoryId;
        private String categoryName;
        private Shop shop;
        private Set<Product> products = new HashSet<>();

        public CategoryBuilder categoryId(Long categoryId) {
            this.categoryId = categoryId;
            return this;
        }

        public CategoryBuilder categoryName(String categoryName) {
            this.categoryName = categoryName;
            return this;
        }

        public CategoryBuilder products(Set<Product> products) {
            this.products = products;
            return this;
        }

        public CategoryBuilder shop(Shop shop) {
            this.shop = shop;
            return this;
        }
        
        public Category build() {
            return new Category(this);
        }
    }
}
