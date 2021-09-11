<?php

namespace Models;

class Categories extends Database
{
    public function getAllCategories()
    {
        return $this -> findAll("
    	SELECT id, name
    	FROM category
    	");
    }
    public function getCategoryById($id)
    {
    	return $this -> findOne("
    	SELECT id, name
    	FROM category
    	WHERE id = ?", [$id]);
    }
    public function updateCategory($datas)
    {
        $this -> modifyOne("
            UPDATE category
            SET name = ?
            WHERE id = ?", $datas);
    }
    public function delCategory($id)
    {
        $this -> modifyOne("
            DELETE FROM category
            WHERE id = ?", [$id]);
    }
    public function newCategory($datas)
    {
        $this -> modifyOne("
            INSERT INTO category(name)
            VALUES (?)", $datas);
    }
    
    
    
}