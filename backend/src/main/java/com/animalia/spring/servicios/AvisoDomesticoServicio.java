package com.animalia.spring.servicios;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.animalia.spring.entidades.AvisoDomestico;
import com.animalia.spring.repositorio.AvisoDomesticoRepositorio;

@Service
public class AvisoDomesticoServicio {

    @Autowired
    private AvisoDomesticoRepositorio avisoDomesticoRepositorio;

    public List<AvisoDomestico> obtenerAvisos() {
        return avisoDomesticoRepositorio.findAllActive();
    }

    public AvisoDomestico obtenerAvisoPorId(long id) {
        return avisoDomesticoRepositorio.findByIdActive(id).orElse(null);
    }

    public AvisoDomestico guardarAviso(AvisoDomestico aviso) {
        return avisoDomesticoRepositorio.save(aviso);
    }

    public void eliminarAviso(long id) {
        AvisoDomestico aviso = avisoDomesticoRepositorio.findById(id).orElse(null);
        if (aviso != null) {
            aviso.setDeleted(true);
            avisoDomesticoRepositorio.save(aviso);
        }
    }

    public AvisoDomestico actualizarAviso(AvisoDomestico aviso) {
        return avisoDomesticoRepositorio.save(aviso);
    }
} 