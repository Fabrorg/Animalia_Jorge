package com.animalia.spring.servicio;

import com.animalia.spring.entidades.AvisoDomestico;
import com.animalia.spring.repositorio.AvisoDomesticoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AvisoDomesticoServicio {

    @Autowired
    private AvisoDomesticoRepositorio avisoDomesticoRepositorio;

    public List<AvisoDomestico> getAllAvisos() {
        return avisoDomesticoRepositorio.findAll();
    }

    public Optional<AvisoDomestico> getAvisoById(Long id) {
        return avisoDomesticoRepositorio.findById(id);
    }

    public AvisoDomestico saveAviso(AvisoDomestico aviso) {
        return avisoDomesticoRepositorio.save(aviso);
    }

    public void deleteAviso(Long id) {
        avisoDomesticoRepositorio.deleteById(id);
    }
} 