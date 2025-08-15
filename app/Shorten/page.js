"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

const Shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setgenerated] = useState("");

  const generate = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        seturl("");
        setshorturl("");
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        console.log(result);
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-md mx-auto w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Shorten URL
            </h1>
            <p className="text-gray-600">Create your custom short link</p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={generate}>
            {/* Long URL Input */}
            <div>
              <label
                htmlFor="url"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Long URL
              </label>
              <input
                onChange={(e) => seturl(e.target.value)}
                type="url"
                id="url"
                name="url"
                placeholder="https://example.com/very-long-url-path"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                required
              />
            </div>

            {/* Preferred Short URL Name */}
            <div>
              <label
                htmlFor="url"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Preferred Short URL Name
              </label>
              <input
                onChange={(e) => setshorturl(e.target.value)}
                type="shorturl"
                id="shorturl"
                name="shorturl"
                placeholder="short URL"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                required
              />

              <p className="text-xs text-gray-500 mt-1">
                Only letters, numbers, and hyphens allowed
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700  transform hover:scale-95 transition-all duration-200 shadow-lg hover:shadow-md"
            >
              Create Short URL
            </button>
          </form>

          {/* Result Preview */}
          {generated && (
            <div className="mt-8 p-4 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-500 mb-2">
                Your shortened URL will appear here
              </p>
              <div className="flex items-center justify-between bg-white p-3 rounded-lg border">
                <span className="text-blue-600 font-mono"> <Link  href={generated} target="_blank">{generated}</Link></span>
                <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                  Copy
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shorten;
