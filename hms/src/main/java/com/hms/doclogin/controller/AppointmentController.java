package com.hms.doclogin.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hms.doclogin.entity.Appointment;
import com.hms.doclogin.repository.AppointmentRepository;

@RestController
@RequestMapping("/api/v2")
@CrossOrigin(origins = "http://localhost:4200")
public class AppointmentController {
    
    private AppointmentRepository appointmentRepository;

    public AppointmentController(AppointmentRepository appointmentRepository){
        super();
        this.appointmentRepository = appointmentRepository;
    }

    @PostMapping
    public Appointment createAppointment(@RequestBody Appointment appointment){
        return appointmentRepository.save(appointment);
    }

    @GetMapping
    public List<Appointment> getAllAppointement(){
        return appointmentRepository.findAll();
    }

}
