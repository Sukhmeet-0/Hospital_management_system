package com.hms.doclogin.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.management.AttributeNotFoundException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

    @DeleteMapping("/appointments/{id}")
    public ResponseEntity<Map<String,Boolean>>deleteAppointment(@PathVariable long id) throws AttributeNotFoundException{
        Appointment appointment = appointmentRepository.findById(id).orElseThrow(()-> new AttributeNotFoundException("Entity not found with id: "+ id));
        appointmentRepository.delete(appointment);
        Map<String, Boolean> response = new HashMap<String,Boolean>();
        response.put("Deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
    @PutMapping("/appointments/{id}")
    public ResponseEntity<Appointment> updateAppointmentById(@PathVariable long id, @RequestBody Appointment appointmentDetails) throws AttributeNotFoundException{
        Appointment appointment = appointmentRepository.findById(id).orElseThrow(()->new AttributeNotFoundException("Patient not found"));
        appointment.setName(appointmentDetails.getName());
        appointment.setAge(appointmentDetails.getAge());
        appointment.setNumber(appointmentDetails.getNumber());
        appointment.setSymptoms(appointmentDetails.getSymptoms());

        Appointment savedAppointment = appointmentRepository.save(appointment);
        return ResponseEntity.ok(savedAppointment);
    }

}
