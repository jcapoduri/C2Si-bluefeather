<?php
require_once __DIR__.'/../helpers/base.model.php';

class Item extends RESTorm {
    public function fromJSON($json) {
        $this->bean->title = $json->title;
        $this->bean->done = $json->done;
    }
    
    public function validate($data) {}
}

?>