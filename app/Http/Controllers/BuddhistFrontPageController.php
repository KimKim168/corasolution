<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\Page;
use App\Models\Post;
use App\Models\PostCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BuddhistFrontPageController extends Controller
{
    public function homepage(Request $request)
    {
        $query = Page::query();

        // Get About page
        $about = (clone $query)
            ->where('code', 'about')
            ->with('images')
            ->first();

        // Get Services page with children + images
        $services = (clone $query)
            ->where('code', 'services')
            ->with([
                'images',
                'children' => function ($q) {
                    $q->orderBy('id', 'desc')
                        ->with('images');
                }
            ])
            ->first();
        $projects = (clone $query)
            ->where('code', 'projects')
            ->with([
                'images',
                'children' => function ($q) {
                    $q->orderBy('id', 'desc')
                        ->with('images');
                }
            ])
            ->first();
        $tableData = Post::orderBy('id', 'desc')->get();
        $heading = PostCategory::first();
        $slides = Banner::all();
        // return $heading;
        return Inertia::render('Frontend/HomePage', [
            'slides'   => $slides,
            'about'    => $about,
            'services' => $services,
            'projects' => $projects,
            'tableData' => $tableData,
            'heading' => $heading,
        ]);
    }

    public function about(Request $request)
    {
        $data = Page::where('code', 'about')
            ->with([
                'images',
                'children' => function ($q) {
                    $q->orderBy('order_index', 'desc')
                        ->with([
                            'images',
                            'children' => function ($q) {
                                $q->orderBy('id', 'desc')
                                    ->with('images');
                            }
                        ]);
                }
            ])
            ->first();

        $services = Page::where('code', 'services')
            ->with([
                'images',
                'children' => function ($q) {
                    $q->orderBy('id', 'desc')
                        ->with('images');
                }
            ])
            ->first();
        return Inertia::render('Frontend/About', [
            'data' => $data,
            'services' => $services,
        ]);
    }

    public function projects(Request $request)
    {
        $projects = Page::where('code', 'projects')
            ->with([
                'images',
                'children' => function ($q) {
                    $q->orderBy('id', 'desc')
                        ->with([
                            'images',
                        ]);
                }
            ])
            ->first();
        return Inertia::render('Frontend/project', [
            'projects' => $projects
        ]);
    }

    public function products(Request $request)
    {
        $data = Page::where('code', 'products')
            ->with([
                'children' => function ($q) {
                    $q->orderBy('id', 'desc')
                        ->with([
                            'images',
                        ]);
                }
            ])
            ->first();
        // return $data;
        return Inertia::render('Frontend/Products/Index', [
            'data' => $data,
        ]);
    }

    public function services(Request $request)
    {
        $services = Page::where('code', 'services')
            ->with([
                'images',
                'children' => function ($q) {
                    $q->orderBy('id', 'desc')
                        ->with('images');
                }
            ])
            ->first();
        // return $services;
        return Inertia::render('Frontend/Services/Index', [
            'services' => $services,
        ]);
    }
    public function contact(Request $request)
    {
        $header = Page::where('code', 'contact-us')->first();
        // return $header;
        return Inertia::render('Frontend/Contact/Index', [
            'header' => $header
        ]);
    }
    public function our_blogs(Request $request)
    {
        $perPage = $request->input('perPage', 12);
        $search = $request->input('search', '');
        $category_code = $request->input('category_code');

        $query = Post::query();


        if ($search) {
            $query->where(function ($sub_query) use ($search) {
                $sub_query->where('title', 'LIKE', "%{$search}%")
                    ->orWhere('title_kh', 'LIKE', "%{$search}%")
                    ->orWhere('short_description', 'LIKE', "%{$search}%")
                    ->orWhere('short_description_kh', 'LIKE', "%{$search}%")
                    ->orWhere('long_description', 'LIKE', "%{$search}%")
                    ->orWhere('long_description_kh', 'LIKE', "%{$search}%");
            });
        }
        $query->orderBy('id', 'desc');

        $tableData = $query->paginate($perPage)->onEachSide(2);

        $tableData =  $query->limit(3)->get();
        $heading = PostCategory::first();
        // return $tableData;
        return Inertia::render('Frontend/News', [
            'tableData' => $tableData,
            'heading' => $heading,
        ]);
    }
    public function our_blog($id)
    {
        $detailData = Post::findOrFail($id);
        return Inertia::render('Frontend/OurBlogDetail', [
            'detailData' => $detailData,
        ]);
    }
    public function detail($id)
    {
        $detailData = Page::findOrFail($id);
        // return $detailData;
        return Inertia::render('Frontend/Detail', [
            'detailData' => $detailData,
        ]);
    }

    // public function posts(Request $request)
    // {
    //     $perPage = $request->input('perPage', 12);
    //     $search = $request->input('search', '');
    //     $sortBy = $request->input('sortBy', 'id');
    //     $category_code = $request->input('category_code');
    //     $sort_by = $request->input('sort_by');
    //     $sortDirection = $request->input('sortDirection', 'desc');

    //     $query = Post::query();

    //     // Exclude 'about' by selecting all other columns
    //     $columns = Schema::getColumnListing('posts'); // get all columns dynamically
    //     $columns = array_diff($columns, ['long_description']); // remove 'about' column
    //     $query->select($columns);

    //     if ($value = $request->input('status')) {
    //         $query->where('status', $value);
    //     }
    //     // End Exclude

    //     if ($category_code) {
    //         $query->where('category_code', $category_code);
    //     }
    //     if ($search) {
    //         $query->where(function ($sub_query) use ($search) {
    //             $sub_query->where('title', 'LIKE', "%{$search}%")
    //                 ->orWhere('title_kh', 'LIKE', "%{$search}%")
    //                 ->orWhere('short_description', 'LIKE', "%{$search}%")
    //                 ->orWhere('keywords', 'LIKE', "%{$search}%")
    //                 ->orWhere('short_description_kh', 'LIKE', "%{$search}%")
    //                 ->orWhere('long_description', 'LIKE', "%{$search}%")
    //                 ->orWhere('long_description_kh', 'LIKE', "%{$search}%")
    //                 ->orWhere('category_code', 'LIKE', "%{$search}%");
    //         });
    //     }

    //     if ($sort_by) {
    //         switch ($sort_by) {
    //             case 'newest':
    //                 $query->orderBy('created_at', 'desc')->orderBy('id', 'desc');
    //                 break;

    //             case 'oldest':
    //                 $query->orderBy('created_at', 'asc')->orderBy('id', 'asc');
    //                 break;

    //             case 'az':
    //                 $query->orderBy('title', 'asc');
    //                 break;

    //             case 'za':
    //                 $query->orderBy('title', 'desc');
    //                 break;

    //             case 'most_viewed':
    //                 $query->orderBy('total_view_count', 'desc');
    //                 break;

    //             case 'least_viewed':
    //                 $query->orderBy('total_view_count', 'asc');
    //                 break;

    //             default:
    //                 // fallback if unknown value, optional
    //                 $query->orderBy('id', 'desc');
    //                 break;
    //         }
    //     } else {
    //         // default order if no sort_by param
    //         $query->orderBy('id', 'desc');
    //     }

    //     $query->with('category');

    //     $tableData = $query->paginate($perPage)->onEachSide(2);

    //     // $tableData =  $query->limit(2)->get();
    //     // return $tableData;

    //     return Inertia::render('Buddhist/Posts/Index', [
    //         'tableData' => $tableData,
    //     ]);
    // }

    // public function post_show(Request $request, string $id)
    // {
    //     $showData = Post::findOrFail($id)->load('category');
    //     $showData->increment('total_view_count');

    //     // Get only images that belong to this post
    //     $postImages = PostImage::where('post_id', $id)->get();

    //     // Get only files that belong to this post
    //     $postFiles = PostFile::where('post_id', $id)->get();

    //     $query = Post::query();
    //     $columns = Schema::getColumnListing('posts');
    //     $columns = array_diff($columns, ['long_description']);

    //     // First related items
    //     $relatedItems = (clone $query)
    //         ->select($columns)
    //         ->where('category_code', $showData->category_code)
    //         ->inRandomOrder()
    //         ->limit(5)
    //         ->get();

    //     // Second related items, excluding the first set
    //     $relatedItemsTwo = (clone $query)
    //         ->select($columns)
    //         ->where('category_code', $showData->category_code)
    //         ->whereNotIn('id', $relatedItems->pluck('id')) // exclude first items
    //         ->inRandomOrder()
    //         ->limit(5)
    //         ->get();

    //     // Increase view count
    //     // return $postFiles;
    //     return Inertia::render('Buddhist/Posts/Show', ['showData' => $showData,
    //     'postImages' => $postImages, 'postFiles' => $postFiles, 'relatedItems' => $relatedItems, 'relatedItemsTwo' => $relatedItemsTwo]);
    // }
}
