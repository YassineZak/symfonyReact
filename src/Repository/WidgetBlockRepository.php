<?php

namespace App\Repository;

use App\Entity\WidgetBlock;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method WidgetBlock|null find($id, $lockMode = null, $lockVersion = null)
 * @method WidgetBlock|null findOneBy(array $criteria, array $orderBy = null)
 * @method WidgetBlock[]    findAll()
 * @method WidgetBlock[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class WidgetBlockRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, WidgetBlock::class);
    }

    // /**
    //  * @return WidgetBlock[] Returns an array of WidgetBlock objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('w')
            ->andWhere('w.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('w.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?WidgetBlock
    {
        return $this->createQueryBuilder('w')
            ->andWhere('w.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
