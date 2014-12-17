<?php

interface ItodoManager {
    public function getTodo($id);

    public function createTodo($item);
    
    public function updateTodo($id, $item);
    
    public function deleteTodo($id);
    
    public function getTodos($user);
};

?>