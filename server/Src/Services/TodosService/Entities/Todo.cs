﻿namespace TodosService.Entities
{
    public class Todo
    {
        public Guid Id { get; set; }
        public string Title { get; set; }

        public string? Description { get; set; }

        public DateTime? CompletedAt { get; set; }
    }
}
