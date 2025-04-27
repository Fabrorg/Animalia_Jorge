package com.animalia.spring.repositorio;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.animalia.spring.entidades.AvisoDomestico;

@Repository
public interface AvisoDomesticoRepositorio extends JpaRepository<AvisoDomestico, Long> {
    List<AvisoDomestico> findByEspecie(String especie);
    List<AvisoDomestico> findByEstado(String estado);
    List<AvisoDomestico> findByEspecieAndEstado(String especie, String estado);
} 