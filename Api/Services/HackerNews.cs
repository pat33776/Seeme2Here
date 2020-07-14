using AngAPI.Interfaces;
using AngAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace AngAPI.Services
{
    public class HackerNews : IHackerNews
    {
        private readonly IHttpClientFactory _clientFactory;

        private const string _hackerNewsBaseUrl = "https://hacker-news.firebaseio.com/v0/";
        public HackerNews(IHttpClientFactory clientFactory)
        {
            _clientFactory = clientFactory;
        }

        public async Task<Story> GetStory(int id = 0)
        {
            string url = _hackerNewsBaseUrl + "item/" + id + ".json?print=pretty";

            var request = new HttpRequestMessage(HttpMethod.Get, url);
            var client = _clientFactory.CreateClient("hackernews");
            var response = await client.SendAsync(request);

            if (response.IsSuccessStatusCode)
            {
                Story _story = await response.Content.ReadAsAsync<Story>();
                return _story;
            }
            else
            {
                throw new Exception(response.ReasonPhrase);
            }
        }

        public async Task<List<int>> GetJobStoryIds()
        {
            string url = _hackerNewsBaseUrl + "jobstories.json?print=pretty";
            var request = new HttpRequestMessage(HttpMethod.Get, url);
            var client = _clientFactory.CreateClient("hackernews");
            var response = await client.SendAsync(request);

            if (response.IsSuccessStatusCode)
            {
                var jobStories = await response.Content.ReadAsAsync<List<int>>();
                return jobStories;
            } 
            else
            {
                throw new Exception(response.ReasonPhrase);
            }
        }
    }
}
