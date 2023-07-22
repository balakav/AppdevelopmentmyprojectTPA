package com.example.bala.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.bala.Model.chennai;
import com.example.bala.Model.flaight;
@Repository
public interface ftrepo extends JpaRepository<flaight,Integer> {
}