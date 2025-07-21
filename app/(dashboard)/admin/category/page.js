"use client";

import ComponentCard from "@/components/admin/common/ComponentCard";
import PageBreadcrumb from "@/components/admin/common/PageBreadcrumb";
import CategoryModal from "@/components/admin/modal/CategoryModal";
import CategoryTable from "@/components/admin/tables/CategoryTable";
import ActionButton from "@/components/admin/ui/button/ActionButton";
import { useState } from "react";
import { FiChevronDown, FiFilter, FiSearch } from "react-icons/fi";

export default function CagegoryPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div>
      <CategoryModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedCategory(null);
        }}
        category={selectedCategory}
      />

      <PageBreadcrumb pageTitle="Category" />
      <div className="space-y-6">
        <ComponentCard>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div className="w-full md:w-auto">
              <ActionButton onClick={() => setIsModalOpen(true)} />
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative flex items-center">
                <FiFilter className="absolute left-3 h-4 w-4 text-gray-400 dark:text-gray-500" />
                <select className="block appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 py-2 pl-8 pr-8 rounded leading-tight focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-600 dark:focus:border-blue-600">
                  <option className="dark:bg-gray-800">Filter by Status</option>
                  <option className="dark:bg-gray-800">Active</option>
                  <option className="dark:bg-gray-800">Inactive</option>
                </select>
                <FiChevronDown className="absolute right-3 h-4 w-4 text-gray-400 dark:text-gray-500" />
              </div>

              <div className="relative flex items-center">
                <select className="block appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 py-2 pl-8 pr-8 rounded leading-tight focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-600 dark:focus:border-blue-600">
                  <option className="dark:bg-gray-800">Sort by</option>
                  <option className="dark:bg-gray-800">Name (A-Z)</option>
                  <option className="dark:bg-gray-800">Name (Z-A)</option>
                  <option className="dark:bg-gray-800">Newest</option>
                  <option className="dark:bg-gray-800">Oldest</option>
                </select>
                <FiChevronDown className="absolute right-3 h-4 w-4 text-gray-400 dark:text-gray-500" />
              </div>
            </div>

            <div className="flex-1 w-full max-w-md">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />
                <input
                  type="text"
                  placeholder="Search by category name..."
                  className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-600 dark:focus:border-blue-600"
                />
              </div>
            </div>
          </div>

          <CategoryTable
            onEditCategory={(category) => {
              setSelectedCategory(category);
              setIsModalOpen(true);
            }}
          />
        </ComponentCard>
      </div>
    </div>
  );
}
