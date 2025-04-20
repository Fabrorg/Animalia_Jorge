package com.animalia.spring.controladores;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.animalia.spring.entidades.AvisoDomestico;
import com.animalia.spring.servicios.AvisoDomesticoServicio;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/api/avisos-domesticos")
@Tag(name = "Avisos Domésticos", description = "API para gestionar avisos de animales domésticos")
public class AvisoDomesticoController {

    @Autowired
    private AvisoDomesticoServicio avisoDomesticoServicio;

    @GetMapping
    @Operation(summary = "Obtener todos los avisos", description = "Obtener la lista de todos los avisos de animales domésticos")
    public ResponseEntity<List<AvisoDomestico>> obtenerAvisos() {
        return ResponseEntity.ok(avisoDomesticoServicio.obtenerAvisos());
    }

    @GetMapping("/{id}")
    @Operation(summary = "Buscar un aviso por ID", description = "Buscar un aviso a partir de su ID")
    public ResponseEntity<AvisoDomestico> obtenerAvisoPorId(@PathVariable long id) {
        return ResponseEntity.ok(avisoDomesticoServicio.obtenerAvisoPorId(id));
    }

    @PostMapping
    @Operation(summary = "Guardar un aviso", description = "Guardar un nuevo aviso en el sistema")
    public ResponseEntity<AvisoDomestico> guardarAviso(@RequestBody AvisoDomestico aviso) {
        return ResponseEntity.ok(avisoDomesticoServicio.guardarAviso(aviso));
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Eliminar un aviso por ID", description = "Eliminar un aviso del sistema a partir de su ID")
    public ResponseEntity<Void> eliminarAviso(@PathVariable long id) {
        avisoDomesticoServicio.eliminarAviso(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping
    @Operation(summary = "Actualizar un aviso", description = "Actualizar los datos de un aviso en el sistema")
    public ResponseEntity<AvisoDomestico> actualizarAviso(@RequestBody AvisoDomestico aviso) {
        return ResponseEntity.ok(avisoDomesticoServicio.actualizarAviso(aviso));
    }
} 