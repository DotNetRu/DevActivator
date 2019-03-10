using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevActivator.Meetups.BL.Entities;
using DevActivator.Meetups.BL.Extensions;
using DevActivator.Meetups.BL.Interfaces;
using DevActivator.Meetups.BL.Models;
using DevActivator.Models;
using Microsoft.AspNetCore.Mvc;

namespace DevActivator.Controllers
{
    [Route("api/[controller]")]
    public class CompositeController : Controller
    {
        private readonly IMeetupService _meetupService;
        private readonly ITalkService _talkService;
        private readonly ISpeakerService _speakerService;
        private readonly IFriendService _friendService;
        private readonly IVenueService _venueService;

        public CompositeController(IMeetupService ms, ITalkService ts, ISpeakerService ss, IFriendService fs, IVenueService vs)
        {
            _meetupService = ms;
            _talkService = ts;
            _speakerService = ss;
            _friendService = fs;
            _venueService = vs;
        }

        [HttpPost("[action]/{meetupId?}")]
        public async Task<CompositeModel> GetMeetup([FromRoute] string meetupId, [FromBody] RandomConcatModel descriptor = null)
        {
            var meetup = await _meetupService.GetMeetupAsync(meetupId).ConfigureAwait(true);

            descriptor = descriptor ?? new RandomConcatModel();
            descriptor.VenueId = descriptor.VenueId;
            descriptor.Sessions = descriptor.Sessions ?? new List<SessionVm>();
            descriptor.TalkIds = descriptor.TalkIds ?? new List<string>();
            descriptor.SpeakerIds = descriptor.SpeakerIds ?? new List<string>();
            descriptor.FriendIds = descriptor.FriendIds ?? new List<string>();

            if (meetup?.Sessions != null)
            {
                descriptor.TalkIds.AddRange(meetup.Sessions.Select(x => x.TalkId));
            }

            // talks
            var talks = new Dictionary<string, TalkVm>();
            foreach (var talkId in descriptor.TalkIds.Distinct())
            {
                var talk = await _talkService.GetTalkAsync(talkId).ConfigureAwait(true);
                talks.Add(talkId, talk);
            }

            // speakers
            descriptor.SpeakerIds.AddRange(
                talks.Select(x => x.Value).SelectMany(x => x.SpeakerIds.Select(s => s.SpeakerId))
            );
            var speakers = new Dictionary<string, SpeakerVm>();
            foreach (var speakerId in descriptor.SpeakerIds.Distinct())
            {
                var speaker = await _speakerService.GetSpeakerAsync(speakerId).ConfigureAwait(true);
                speakers.Add(speakerId, speaker);
            }

            // friends
            if (meetup?.FriendIds != null)
            {
                descriptor.FriendIds.AddRange(meetup.FriendIds.Select(x => x.FriendId));
            }

            var friends = new List<Friend>();
            foreach (var friendId in descriptor.FriendIds.Distinct())
            {
                var friend = await _friendService.GetFriendAsync(friendId).ConfigureAwait(false);
                friends.Add(friend);
            }

            // name
            if (string.IsNullOrWhiteSpace(descriptor.Name))
            {
                descriptor.Name = meetup?.Name;
            }

            // venue
            descriptor.VenueId = descriptor.VenueId ?? meetup?.VenueId;
            VenueVm venue = null;
            if (!string.IsNullOrWhiteSpace(descriptor.VenueId))
            {
                venue = await _venueService.GetVenueAsync(descriptor.VenueId).ConfigureAwait(false);
            }

            // community
            if (string.IsNullOrWhiteSpace(descriptor.CommunityId))
            {
                descriptor.CommunityId = meetup?.CommunityId.ToString();
            }

            return new CompositeModel
            {
                Id = meetup?.Id,
                Name = descriptor.Name,
                CommunityId = descriptor.CommunityId.GetCommunity(),
                Venue = venue,
                Sessions = meetup?.Sessions,
                Talks = talks,
                Speakers = speakers,
                Friends = friends
            };
        }
    }
}