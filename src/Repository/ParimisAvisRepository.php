<?php

namespace App\Repository;

use App\Entity\ParimisAvis;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method ParimisAvis|null find($id, $lockMode = null, $lockVersion = null)
 * @method ParimisAvis|null findOneBy(array $criteria, array $orderBy = null)
 * @method ParimisAvis[]    findAll()
 * @method ParimisAvis[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ParimisAvisRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ParimisAvis::class);
    }

    // /**
    //  * @return ParimisAvis[] Returns an array of ParimisAvis objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ParimisAvis
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
