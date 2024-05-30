package com.backend.server.service;

import java.util.Base64;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.backend.server.configuration.JwtUtil;
import com.backend.server.model.Shop;
import com.backend.server.repository.ShopRepository;
import com.backend.server.repository.UserRepository;
import com.backend.server.requests.CreateShopRequest;
import com.backend.server.requests.ShopResponse;
import com.backend.server.requests.UpdateShopRequest;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ShopService {
    
    private final ShopRepository shopRepository;
    private final JwtUtil jwtUtil;
    private final UserRepository userRepository;

    public ShopResponse createShop(String header, CreateShopRequest request)
    {
        var user = userRepository.findByUsername
        (jwtUtil.extractUsername
        (header));
        String base64image=request.getLogo();
        if (base64image==null || base64image.trim().isEmpty())
        {
            throw new IllegalArgumentException();
        }
        byte[] logoBytes = Base64.getDecoder().decode(base64image);
        var shop = Shop.builder()
               .shop_name(request.getShopName())
               .logo(logoBytes)
               .template(request.getTemplate())
               .user(user.get())
               .shop_description(request.getShopDescription())
               .styles(request.getStyles())
               .user(user.get())
               .build();
        
        shopRepository.save(shop);
        return ShopResponse.builder()
               .shopName(request.getShopName())
               .build();
    }

    public ShopResponse updateShop(String header, UpdateShopRequest request) {
        
        Optional<Shop> optionalShop = shopRepository.findByShopName(request.getShopName());
        if (!optionalShop.isPresent()) {
            throw new IllegalArgumentException();
        }
        Shop shop = optionalShop.get();
        
        if (request.getLogo()!= null) {
            byte[] logoBytes = Base64.getDecoder().decode(request.getLogo());
            shop.setLogo(logoBytes);
        }
        shop.setShopName(request.getNewShopName());
        shop.setTemplate(request.getTemplate());
        shop.setShop_description(request.getShopDescription());
        shop.setStyles(request.getStyles());
        
        shopRepository.save(shop);
        return ShopResponse.builder()
                .shopName(shop.getShopName())
                .build();
    }

    public ShopResponse deleteShop(String header, String request) {
        Optional<Shop> optionalShop = shopRepository.findByShopName(request);
        if (optionalShop.isPresent())
        {
            Shop shop = optionalShop.get();
            shopRepository.delete(shop);
            return ShopResponse.builder()
                .shopName(request)
                .build();
        }
        else
        {
            throw new IllegalArgumentException();
        }
    }

    public Shop getShop(String header) {
        var user = userRepository.findByUsername
        (jwtUtil.extractUsername
        (header));
        Optional<Shop> optionalShop = shopRepository.findById(user.get().getId());
        return optionalShop.get();
    }

}
