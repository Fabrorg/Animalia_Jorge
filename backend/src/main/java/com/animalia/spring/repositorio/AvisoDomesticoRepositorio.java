package com.animalia.spring.repositorio;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.animalia.spring.entidades.AvisoDomestico;

@Repository
public interface AvisoDomesticoRepositorio extends JpaRepository<AvisoDomestico, Long> {
    
    @Query("SELECT a FROM AvisoDomestico a WHERE a.deleted = false")
    List<AvisoDomestico> findAllActive();

    @Query("SELECT a FROM AvisoDomestico a WHERE a.id = ?1 AND a.deleted = false")
    Optional<AvisoDomestico> findByIdActive(Long id);
} 