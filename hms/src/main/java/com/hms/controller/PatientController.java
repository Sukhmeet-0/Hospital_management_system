package com.hms.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hms.entity.Patient;
import com.hms.repository.PatientRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class PatientController {

    private PatientRepository patientRepository;

    public PatientController(PatientRepository patientRepository){
        super();
        this.patientRepository = patientRepository;
    }
    
    @PostMapping("/insert")
    public Patient createPatient(@RequestBody Patient patient){
        return patientRepository.save(patient);
    }

    @GetMapping
    public List<Patient> getAllPatient(){
        return patientRepository.findAll();
    }
}
