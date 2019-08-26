<?php 
namespace App\Controller\Rest;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Entity\Carousel;
use App\Entity\WidgetBlock;
use FOS\RestBundle\View\View;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;


class ApiController extends FOSRestController {

    /**
     * @Rest\Get("/carousel")
     */
    public function getCarouselResourcesAction(){
        $repository = $this->getDoctrine()->getRepository(Carousel::class);
        $datas= $products = $repository->findAll();
        return View::create($datas, Response::HTTP_OK);
    }

    /**
     * @Rest\Get("/widgetblock")
     */
    public function getWidgetBlockResourcesAction(){
        $repository = $this->getDoctrine()->getRepository(WidgetBlock::class);
        $datas= $products = $repository->findAll();
        return View::create($datas, Response::HTTP_OK);
    }
}