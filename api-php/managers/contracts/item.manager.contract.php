<?php

interface IitemManager {
    public function createItem($item);
    
    public function updateItem($id, $item);
    
    public function deleteItem($id);
    
    public function getItems($user);

    public function assignItemToTodo($todo, $item);
};

?>