package com.diplom.storeforge;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.diplom.storeforge")
public class StoreforgeApplication {

	public static void main(String[] args) {
		SpringApplication.run(StoreforgeApplication.class, args);
	}

}
