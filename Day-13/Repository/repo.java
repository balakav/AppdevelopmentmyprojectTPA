package com.example.bala.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.bala.Model.model;
@Repository
public interface repo extends JpaRepository<model,String> {
}
    //  NOT LIKE
//@Query(value="Select * from Employee where designation NOT LIKE ?1% ",nativeQuery=true)
//public List <model> findDesignationNotLike(String designation);
////NOT CONTAIN
//@Query(value="Select * from Employee where designation NOT LIKE %?1% ",nativeQuery=true)
//public List <model> findDesignationNameNotLike(String designation);

