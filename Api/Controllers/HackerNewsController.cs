using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Interfaces;
using Api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HackerNewsController : ControllerBase
    {
        private readonly IHackerNews _hacker;
        public HackerNewsController(IHackerNews hacker)
        {
            _hacker = hacker;
        }

        // GET: api/HackerNews
        [HttpGet]
        public async Task<List<Story>> GetJobStories()
        {
           var result = new List<Story>();
            var _ids = await _hacker.GetJobStoryIds();
            if(_ids.Count >0)
            {
                _ids = _ids.OrderByDescending(_ids => _ids).Take (50).ToList();
                foreach(int id in _ids)
                {
                    var story = await _hacker.GetStory(id);
                    result.Add(story);
                }
            }
            return result;
        }

        // GET: api/HackerNews/5
        [HttpGet("{id}", Name = "GetHackerNews")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/HackerNews
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/HackerNews/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
