<?php

use App\Entities\Product;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $query = Product::from('products as t');
    $query->with('category');
//        $query->join('categories parent', 'parent.id', '=', 't.category_id');
//        $query->join('categories c', function (JoinClause $join) {
//            $join->on('parent._lft', '<=', 'c._lft');
//            $join->on('parent._rgt', '>=', 'c._rgt');
//        });
//
//        $query->where('t.category_id', $args['categoryId']);
//        $query->where('t.quantity', '>', 0);
//
//        // filters
//        empty($args['priceFrom']) ?: $query->where('t.price', '>=', $args['priceFrom']);
//        empty($args['priceTo']) ?: $query->where('t.price', '<=', $args['priceTo']);
//        empty($args['search']) ?: $query->where('t.heading', 'like', "%{$args['search']}%");
//

    return $query->paginate(10, ['t.*'], 'page', 1);

    return view('welcome');
});
